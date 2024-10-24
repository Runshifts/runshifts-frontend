export const industries = [
    // Healthcare & Medical
    { value: "hospitals", label: "Hospitals & Medical Centers" },
    { value: "nursing-homes", label: "Nursing Homes & Long-term Care" },
    { value: "emergency-services", label: "Emergency Medical Services" },
    { value: "medical-clinics", label: "Medical Clinics" },
    { value: "pharmacies", label: "Pharmacies" },

    // Manufacturing & Production
    { value: "automotive-manufacturing", label: "Automotive Manufacturing" },
    { value: "food-production", label: "Food & Beverage Production" },
    { value: "textile-manufacturing", label: "Textile Manufacturing" },
    { value: "electronics-manufacturing", label: "Electronics Manufacturing" },
    { value: "pharmaceutical-manufacturing", label: "Pharmaceutical Manufacturing" },
    { value: "chemical-manufacturing", label: "Chemical Manufacturing" },

    // Retail & Service
    { value: "retail-stores", label: "Retail Stores" },
    { value: "supermarkets", label: "Supermarkets & Grocery" },
    { value: "restaurants", label: "Restaurants & Food Service" },
    { value: "hotels", label: "Hotels & Hospitality" },
    { value: "convenience-stores", label: "Convenience Stores" },

    // Transportation & Logistics
    { value: "warehousing", label: "Warehousing & Distribution" },
    { value: "logistics", label: "Logistics & Supply Chain" },
    { value: "transportation", label: "Transportation Services" },
    { value: "courier-services", label: "Courier & Delivery Services" },
    { value: "airlines", label: "Airlines & Aviation" },

    // Security & Safety
    { value: "security-services", label: "Security Services" },
    { value: "private-security", label: "Private Security Firms" },
    { value: "surveillance", label: "Surveillance & Monitoring" },

    // Energy & Utilities
    { value: "power-plants", label: "Power Plants" },
    { value: "oil-gas", label: "Oil & Gas Operations" },
    { value: "utilities", label: "Utilities Services" },
    { value: "renewable-energy", label: "Renewable Energy" },

    // Construction & Maintenance
    { value: "construction", label: "Construction" },
    { value: "facility-maintenance", label: "Facility Maintenance" },
    { value: "building-services", label: "Building Services" },
    { value: "property-management", label: "Property Management" },

    // Entertainment & Hospitality
    { value: "casinos", label: "Casinos & Gaming" },
    { value: "theme-parks", label: "Theme Parks & Entertainment" },
    { value: "event-venues", label: "Event Venues" },
    { value: "theaters", label: "Theaters & Performance Venues" },

    // Call Centers & Customer Service
    { value: "call-centers", label: "Call Centers" },
    { value: "customer-support", label: "Customer Support Centers" },
    { value: "telemarketing", label: "Telemarketing Services" },

    // Emergency Services
    { value: "fire-services", label: "Fire Services" },
    { value: "police", label: "Law Enforcement" },
    { value: "emergency-response", label: "Emergency Response" },

    // Information Technology (IT) & Tech
    { value: "data-centers", label: "Data Centers" },
    { value: "it-support", label: "IT Support Services" },
    { value: "network-operations", label: "Network Operations" },
    { value: "software-development", label: "Software Development" }, // New
    { value: "cybersecurity", label: "Cybersecurity" }, // New

    // Fashion & Apparel
    { value: "fashion-design", label: "Fashion Design" }, // New
    { value: "apparel-manufacturing", label: "Apparel Manufacturing" }, // New
    { value: "fashion-retail", label: "Fashion Retail" }, // New
    { value: "textile-production", label: "Textile Production" }, // New

    // Agriculture & Farming
    { value: "farms", label: "Farms & Agricultural Operations" },
    { value: "livestock", label: "Livestock Management" },
    { value: "food-processing", label: "Food Processing" },

    // Broadcasting & Media
    { value: "television", label: "Television Broadcasting" },
    { value: "radio", label: "Radio Broadcasting" },
    { value: "news-operations", label: "News Operations" },

    // Mining & Resources
    { value: "mining", label: "Mining Operations" },
    { value: "quarrying", label: "Quarrying" },
    { value: "mineral-processing", label: "Mineral Processing" },

    // Cleaning & Maintenance
    { value: "commercial-cleaning", label: "Commercial Cleaning" },
    { value: "janitorial-services", label: "Janitorial Services" },
    { value: "waste-management", label: "Waste Management" },

    // Public Transportation
    { value: "bus-services", label: "Bus Services" },
    { value: "rail-services", label: "Rail Services" },
    { value: "metro-services", label: "Metro & Subway Services" },

    // Other Industries
    { value: "other", label: "Other Shift-Based Industry" }
];

// Group industries by category for the select element
export const industryGroups = [
    {
        label: "Healthcare & Medical",
        options: industries.slice(0, 5)
    },
    {
        label: "Manufacturing & Production",
        options: industries.slice(5, 11)
    },
    {
        label: "Retail & Service",
        options: industries.slice(11, 16)
    },
    {
        label: "Transportation & Logistics",
        options: industries.slice(16, 21)
    },
    {
        label: "Security & Safety",
        options: industries.slice(21, 24)
    },
    {
        label: "Energy & Utilities",
        options: industries.slice(24, 28)
    },
    {
        label: "Construction & Maintenance",
        options: industries.slice(28, 32)
    },
    {
        label: "Entertainment & Hospitality",
        options: industries.slice(32, 36)
    },
    {
        label: "Call Centers & Customer Service",
        options: industries.slice(36, 39)
    },
    {
        label: "Emergency Services",
        options: industries.slice(39, 42)
    },
    {
        label: "Information Technology & Tech", // New
        options: industries.slice(42, 46)
    },
    {
        label: "Fashion & Apparel", // New
        options: industries.slice(46, 50)
    },
    {
        label: "Agriculture & Farming",
        options: industries.slice(50, 53)
    },
    {
        label: "Broadcasting & Media",
        options: industries.slice(53, 56)
    },
    {
        label: "Mining & Resources",
        options: industries.slice(56, 59)
    },
    {
        label: "Cleaning & Maintenance",
        options: industries.slice(59, 62)
    },
    {
        label: "Public Transportation",
        options: industries.slice(62, 65)
    },
    {
        label: "Other Industries",
        options: industries.slice(65)
    }
];
