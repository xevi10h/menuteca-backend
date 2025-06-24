-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enable PostGIS for geographical data
CREATE EXTENSION IF NOT EXISTS postgis;

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    photo TEXT,
    google_id VARCHAR(255) UNIQUE,
    password_hash TEXT,
    language VARCHAR(10) NOT NULL DEFAULT 'es_ES' CHECK (language IN ('en_US', 'es_ES', 'ca_ES', 'fr_FR')),
    has_password BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Addresses table
CREATE TABLE IF NOT EXISTS addresses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    street JSONB NOT NULL, -- {en_US: "", es_ES: "", ca_ES: "", fr_FR: ""}
    number VARCHAR(20) NOT NULL,
    additional_information TEXT,
    postal_code VARCHAR(20) NOT NULL,
    city JSONB NOT NULL, -- {en_US: "", es_ES: "", ca_ES: "", fr_FR: ""}
    country JSONB NOT NULL, -- {en_US: "", es_ES: "", ca_ES: "", fr_FR: ""}
    coordinates JSONB NOT NULL, -- {latitude: number, longitude: number}
    formatted_address TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Cuisines table
CREATE TABLE IF NOT EXISTS cuisines (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name JSONB NOT NULL, -- {en_US: "", es_ES: "", ca_ES: "", fr_FR: ""}
    image TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Restaurants table
CREATE TABLE IF NOT EXISTS restaurants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    minimum_price DECIMAL(10,2) NOT NULL CHECK (minimum_price >= 0),
    cuisine_id UUID NOT NULL REFERENCES cuisines(id) ON DELETE CASCADE,
    rating DECIMAL(3,2) CHECK (rating >= 0 AND rating <= 5),
    main_image TEXT NOT NULL,
    profile_image TEXT,
    images TEXT[] DEFAULT '{}',
    address_id UUID NOT NULL REFERENCES addresses(id) ON DELETE CASCADE,
    tags TEXT[] DEFAULT '{}',
    phone VARCHAR(50),
    reservation_link TEXT,
    owner_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Menus table
CREATE TABLE IF NOT EXISTS menus (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    restaurant_id UUID NOT NULL REFERENCES restaurants(id) ON DELETE CASCADE,
    name JSONB NOT NULL, -- {en_US: "", es_ES: "", ca_ES: "", fr_FR: ""}
    days TEXT[] NOT NULL DEFAULT '{}',
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    price DECIMAL(10,2) NOT NULL CHECK (price >= 0),
    first_courses_to_share BOOLEAN NOT NULL DEFAULT false,
    second_courses_to_share BOOLEAN NOT NULL DEFAULT false,
    desserts_to_share BOOLEAN NOT NULL DEFAULT false,
    includes_bread BOOLEAN NOT NULL DEFAULT false,
    drinks JSONB NOT NULL DEFAULT '{"water": false, "wine": false, "soft_drinks": false, "beer": false}',
    includes_coffee_and_dessert VARCHAR(20) NOT NULL DEFAULT 'none' CHECK (includes_coffee_and_dessert IN ('none', 'coffee', 'dessert', 'both')),
    minimum_people INTEGER NOT NULL DEFAULT 1 CHECK (minimum_people >= 1),
    has_minimum_people BOOLEAN NOT NULL DEFAULT false,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Dishes table
CREATE TABLE IF NOT EXISTS dishes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    menu_id UUID NOT NULL REFERENCES menus(id) ON DELETE CASCADE,
    name JSONB NOT NULL, -- {en_US: "", es_ES: "", ca_ES: "", fr_FR: ""}
    description JSONB NOT NULL, -- {en_US: "", es_ES: "", ca_ES: "", fr_FR: ""}
    extra_price DECIMAL(10,2) NOT NULL DEFAULT 0 CHECK (extra_price >= 0),
    category VARCHAR(50) NOT NULL CHECK (category IN ('appetizers', 'firstCourses', 'secondCourses', 'mainCourses', 'sides', 'desserts', 'drinks')),
    is_vegetarian BOOLEAN NOT NULL DEFAULT false,
    is_lactose_free BOOLEAN NOT NULL DEFAULT false,
    is_spicy BOOLEAN NOT NULL DEFAULT false,
    is_gluten_free BOOLEAN NOT NULL DEFAULT false,
    is_vegan BOOLEAN NOT NULL DEFAULT false,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Reviews table
CREATE TABLE IF NOT EXISTS reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    restaurant_id UUID NOT NULL REFERENCES restaurants(id) ON DELETE CASCADE,
    rating DECIMAL(3,2) NOT NULL CHECK (rating >= 0 AND rating <= 5),
    comment JSONB NOT NULL, -- {en_US: "", es_ES: "", ca_ES: "", fr_FR: ""}
    photos TEXT[] DEFAULT '{}',
    restaurant_response_message JSONB,
    restaurant_response_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, restaurant_id) -- One review per user per restaurant
);

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_google_id ON users(google_id);
CREATE INDEX IF NOT EXISTS idx_restaurants_cuisine_id ON restaurants(cuisine_id);
CREATE INDEX IF NOT EXISTS idx_restaurants_owner_id ON restaurants(owner_id);
CREATE INDEX IF NOT EXISTS idx_restaurants_is_active ON restaurants(is_active);
CREATE INDEX IF NOT EXISTS idx_restaurants_rating ON restaurants(rating);
CREATE INDEX IF NOT EXISTS idx_menus_restaurant_id ON menus(restaurant_id);
CREATE INDEX IF NOT EXISTS idx_menus_is_active ON menus(is_active);
CREATE INDEX IF NOT EXISTS idx_dishes_menu_id ON dishes(menu_id);
CREATE INDEX IF NOT EXISTS idx_dishes_category ON dishes(category);
CREATE INDEX IF NOT EXISTS idx_dishes_is_active ON dishes(is_active);
CREATE INDEX IF NOT EXISTS idx_reviews_user_id ON reviews(user_id);
CREATE INDEX IF NOT EXISTS idx_reviews_restaurant_id ON reviews(restaurant_id);
CREATE INDEX IF NOT EXISTS idx_reviews_rating ON reviews(rating);

-- Functions for updating timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$ language 'plpgsql';

-- Triggers for updating timestamps
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_addresses_updated_at BEFORE UPDATE ON addresses FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_cuisines_updated_at BEFORE UPDATE ON cuisines FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_restaurants_updated_at BEFORE UPDATE ON restaurants FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_menus_updated_at BEFORE UPDATE ON menus FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_dishes_updated_at BEFORE UPDATE ON dishes FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_reviews_updated_at BEFORE UPDATE ON reviews FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to calculate restaurant rating based on reviews
CREATE OR REPLACE FUNCTION update_restaurant_rating()
RETURNS TRIGGER AS $
BEGIN
    UPDATE restaurants 
    SET rating = (
        SELECT ROUND(AVG(rating)::numeric, 2)
        FROM reviews 
        WHERE restaurant_id = COALESCE(NEW.restaurant_id, OLD.restaurant_id)
    )
    WHERE id = COALESCE(NEW.restaurant_id, OLD.restaurant_id);
    
    RETURN COALESCE(NEW, OLD);
END;
$ language 'plpgsql';

-- Triggers to update restaurant rating when reviews change
CREATE TRIGGER update_restaurant_rating_on_insert AFTER INSERT ON reviews FOR EACH ROW EXECUTE FUNCTION update_restaurant_rating();
CREATE TRIGGER update_restaurant_rating_on_update AFTER UPDATE ON reviews FOR EACH ROW EXECUTE FUNCTION update_restaurant_rating();
CREATE TRIGGER update_restaurant_rating_on_delete AFTER DELETE ON reviews FOR EACH ROW EXECUTE FUNCTION update_restaurant_rating();