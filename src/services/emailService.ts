import nodemailer from 'nodemailer';
import { AppError } from '@/middleware/errorHandler';

interface EmailConfig {
	host: string;
	port: number;
	secure: boolean;
	auth: {
		user: string;
		pass: string;
	};
}

class EmailServiceClass {
	private transporter: nodemailer.Transporter;
	private isConfigured: boolean = false;

	constructor() {
		this.setupTransporter();
	}

	private setupTransporter() {
		try {
			const emailConfig: EmailConfig = {
				host: process.env.SMTP_HOST || 'smtp.gmail.com',
				port: parseInt(process.env.SMTP_PORT || '587'),
				secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
				auth: {
					user: process.env.SMTP_USER || '',
					pass: process.env.SMTP_PASS || '',
				},
			};

			this.transporter = nodemailer.createTransporter(emailConfig);
			this.isConfigured = !!(emailConfig.auth.user && emailConfig.auth.pass);

			if (this.isConfigured) {
				// Verify connection configuration
				this.transporter.verify((error, success) => {
					if (error) {
						console.error('Email configuration error:', error);
						this.isConfigured = false;
					} else {
						console.log('Email server is ready to take our messages');
					}
				});
			} else {
				console.warn('Email service not configured - missing SMTP credentials');
			}
		} catch (error) {
			console.error('Failed to setup email transporter:', error);
			this.isConfigured = false;
		}
	}

	/**
	 * Send password reset email
	 */
	async sendPasswordResetEmail(
		email: string,
		name: string,
		resetToken: string,
	): Promise<void> {
		if (!this.isConfigured) {
			throw new AppError('Email service not configured', 500);
		}

		const resetUrl = `${
			process.env.FRONTEND_URL || 'http://localhost:3000'
		}/auth/reset-password?token=${resetToken}`;

		const mailOptions = {
			from: {
				name: process.env.FROM_NAME || 'Menuteca',
				address: process.env.FROM_EMAIL || process.env.SMTP_USER || '',
			},
			to: email,
			subject: 'Restablecer tu contraseña - Menuteca',
			html: this.getPasswordResetTemplate(name, resetUrl),
			text: this.getPasswordResetTextTemplate(name, resetUrl),
		};

		try {
			await this.transporter.sendMail(mailOptions);
		} catch (error) {
			console.error('Failed to send password reset email:', error);
			throw new AppError('Failed to send password reset email', 500);
		}
	}

	/**
	 * Send welcome email
	 */
	async sendWelcomeEmail(email: string, name: string): Promise<void> {
		if (!this.isConfigured) {
			console.warn('Email service not configured - skipping welcome email');
			return;
		}

		const mailOptions = {
			from: {
				name: process.env.FROM_NAME || 'Menuteca',
				address: process.env.FROM_EMAIL || process.env.SMTP_USER || '',
			},
			to: email,
			subject: '¡Bienvenido a Menuteca!',
			html: this.getWelcomeTemplate(name),
			text: this.getWelcomeTextTemplate(name),
		};

		try {
			await this.transporter.sendMail(mailOptions);
		} catch (error) {
			console.error('Failed to send welcome email:', error);
			// Don't throw error for welcome email as it's not critical
		}
	}

	/**
	 * Password reset email HTML template
	 */
	private getPasswordResetTemplate(name: string, resetUrl: string): string {
		return `
			<!DOCTYPE html>
			<html>
			<head>
				<meta charset="utf-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Restablecer contraseña</title>
				<style>
					body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
					.container { max-width: 600px; margin: 0 auto; padding: 20px; }
					.header { text-align: center; margin-bottom: 30px; }
					.logo { font-size: 32px; font-weight: bold; color: #2D5016; }
					.button { 
						display: inline-block; 
						padding: 12px 24px; 
						background-color: #2D5016; 
						color: white; 
						text-decoration: none; 
						border-radius: 8px; 
						margin: 20px 0;
					}
					.footer { margin-top: 30px; font-size: 12px; color: #666; }
				</style>
			</head>
			<body>
				<div class="container">
					<div class="header">
						<div class="logo">Menuteca</div>
					</div>
					
					<h2>Restablecer tu contraseña</h2>
					
					<p>Hola ${name},</p>
					
					<p>Hemos recibido una solicitud para restablecer la contraseña de tu cuenta en Menuteca.</p>
					
					<p>Haz clic en el siguiente enlace para restablecer tu contraseña:</p>
					
					<div style="text-align: center;">
						<a href="${resetUrl}" class="button">Restablecer Contraseña</a>
					</div>
					
					<p>Este enlace expirará en 1 hora por razones de seguridad.</p>
					
					<p>Si no solicitaste este cambio, puedes ignorar este email de forma segura.</p>
					
					<p>Saludos,<br>El equipo de Menuteca</p>
					
					<div class="footer">
						<p>Si tienes problemas haciendo clic en el botón, copia y pega la siguiente URL en tu navegador:</p>
						<p>${resetUrl}</p>
					</div>
				</div>
			</body>
			</html>
		`;
	}

	/**
	 * Password reset email text template
	 */
	private getPasswordResetTextTemplate(name: string, resetUrl: string): string {
		return `
			Restablecer tu contraseña - Menuteca

			Hola ${name},

			Hemos recibido una solicitud para restablecer la contraseña de tu cuenta en Menuteca.

			Para restablecer tu contraseña, visita el siguiente enlace:
			${resetUrl}

			Este enlace expirará en 1 hora por razones de seguridad.

			Si no solicitaste este cambio, puedes ignorar este email de forma segura.

			Saludos,
			El equipo de Menuteca
		`;
	}

	/**
	 * Welcome email HTML template
	 */
	private getWelcomeTemplate(name: string): string {
		return `
			<!DOCTYPE html>
			<html>
			<head>
				<meta charset="utf-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>¡Bienvenido a Menuteca!</title>
				<style>
					body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
					.container { max-width: 600px; margin: 0 auto; padding: 20px; }
					.header { text-align: center; margin-bottom: 30px; }
					.logo { font-size: 32px; font-weight: bold; color: #2D5016; }
					.button { 
						display: inline-block; 
						padding: 12px 24px; 
						background-color: #2D5016; 
						color: white; 
						text-decoration: none; 
						border-radius: 8px; 
						margin: 20px 0;
					}
				</style>
			</head>
			<body>
				<div class="container">
					<div class="header">
						<div class="logo">Menuteca</div>
					</div>
					
					<h2>¡Bienvenido a Menuteca!</h2>
					
					<p>Hola ${name},</p>
					
					<p>¡Gracias por unirte a Menuteca! Estamos emocionados de tenerte como parte de nuestra comunidad gastronómica.</p>
					
					<p>Con Menuteca puedes:</p>
					<ul>
						<li>Descubrir nuevos restaurantes</li>
						<li>Ver menús actualizados</li>
						<li>Dejar reseñas y valoraciones</li>
						<li>Gestionar tu propio restaurante</li>
					</ul>
					
					<div style="text-align: center;">
						<a href="${
							process.env.FRONTEND_URL || 'http://localhost:3000'
						}" class="button">Explorar Restaurantes</a>
					</div>
					
					<p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
					
					<p>¡Buen provecho!<br>El equipo de Menuteca</p>
				</div>
			</body>
			</html>
		`;
	}

	/**
	 * Welcome email text template
	 */
	private getWelcomeTextTemplate(name: string): string {
		return `
			¡Bienvenido a Menuteca!

			Hola ${name},

			¡Gracias por unirte a Menuteca! Estamos emocionados de tenerte como parte de nuestra comunidad gastronómica.

			Con Menuteca puedes:
			- Descubrir nuevos restaurantes
			- Ver menús actualizados  
			- Dejar reseñas y valoraciones
			- Gestionar tu propio restaurante

			Visita nuestra aplicación: ${
				process.env.FRONTEND_URL || 'http://localhost:3000'
			}

			Si tienes alguna pregunta, no dudes en contactarnos.

			¡Buen provecho!
			El equipo de Menuteca
		`;
	}
}

export const EmailService = new EmailServiceClass();
