"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products = [
    {
        "name": "EcoDetergente Concentrado",
        "description": "Detergente líquido concentrado biodegradable para lavandería, elimina manchas difíciles y es suave con la piel y el medio ambiente.",
        "price": "12.99",
        "image": "https://example.com/ecocleantech_product1.png",
        "stock": 100,
        "category": "Limpieza",
        "companyDocument": "02"
    },
    {
        "name": "EcoLimpia Vidrios",
        "description": "Limpiador de vidrios y superficies transparentes, libre de químicos agresivos y deja un acabado brillante sin rayas.",
        "price": "8.49",
        "image": "https://example.com/ecocleantech_product2.png",
        "stock": 80,
        "category": "Limpieza",
        "companyDocument": "02"
    },
    {
        "name": "EcoMultiusos Spray",
        "description": "Limpiador multiusos en spray, ideal para superficies de cocina, baño y áreas comunes, formulado con ingredientes naturales y sin fragancias artificiales.",
        "price": "9.99",
        "image": "https://example.com/ecocleantech_product3.png",
        "stock": 120,
        "category": "Limpieza",
        "companyDocument": "02"
    },
    {
        "name": "EcoDesinfectante Natural",
        "description": "Desinfectante natural en gel, elimina bacterias y gérmenes sin dañar la piel ni el medio ambiente, perfecto para uso doméstico y comercial.",
        "price": "14.99",
        "image": "https://example.com/ecocleantech_product4.png",
        "stock": 90,
        "category": "Limpieza",
        "companyDocument": "02"
    },
    {
        "name": "EcoLimpiador de Baños",
        "description": "Limpiador específico para baños, elimina manchas de jabón, sarro y bacterias, deja un aroma fresco y duradero sin residuos tóxicos.",
        "price": "10.99",
        "image": "https://example.com/ecocleantech_product5.png",
        "stock": 70,
        "category": "Limpieza",
        "companyDocument": "02"
    },
    {
        "name": "Proteína en Polvo FitFuel",
        "description": "Mezcla de proteínas de suero de leche y caseína micelar, ideal para la recuperación muscular y el desarrollo de masa magra.",
        "price": "29.99",
        "image": "https://example.com/fitfuel_product1.png",
        "stock": 150,
        "category": "Suplementos",
        "companyDocument": "03"
    },
    {
        "name": "Barritas Energéticas FitFuel",
        "description": "Barritas energéticas hechas con ingredientes naturales como avena, frutos secos y miel, perfectas para un impulso rápido de energía antes o después del entrenamiento.",
        "price": "2.49",
        "image": "https://example.com/fitfuel_product2.png",
        "stock": 200,
        "category": "Snacks",
        "companyDocument": "03"
    },
    {
        "name": "Omega-3 Fish Oil FitFuel",
        "description": "Suplemento de aceite de pescado rico en ácidos grasos omega-3, esencial para la salud cardiovascular y el funcionamiento cerebral óptimo.",
        "price": "17.99",
        "image": "https://example.com/fitfuel_product3.png",
        "stock": 120,
        "category": "Suplementos",
        "companyDocument": "03"
    },
    {
        "name": "Mezcla de Frutos Secos FitFuel",
        "description": "Mezcla equilibrada de almendras, nueces y semillas, rica en proteínas, fibra y grasas saludables, ideal como snack nutritivo.",
        "price": "5.99",
        "image": "https://example.com/fitfuel_product4.png",
        "stock": 180,
        "category": "Snacks",
        "companyDocument": "03"
    },
    {
        "name": "Creatina Monohidratada FitFuel",
        "description": "Suplemento de creatina pura micronizada, aumenta la fuerza, la resistencia y la recuperación muscular, ideal para entrenamientos de alta intensidad.",
        "price": "12.99",
        "image": "https://example.com/fitfuel_product5.png",
        "stock": 100,
        "category": "Suplementos",
        "companyDocument": "03"
    },
    {
        "name": "Kit de Semillas Orgánicas GreenThumb",
        "description": "Kit con una variedad de semillas orgánicas de alta calidad para cultivar tus propias verduras, hierbas y flores en casa.",
        "price": "19.99",
        "image": "https://example.com/greenthumb_product1.png",
        "stock": 200,
        "category": "Jardinería",
        "companyDocument": "04"
    },
    {
        "name": "Fertilizante Natural GreenThumb",
        "description": "Fertilizante orgánico hecho de compost y nutrientes naturales para mejorar la salud del suelo y promover un crecimiento vigoroso de las plantas.",
        "price": "12.49",
        "image": "https://example.com/greenthumb_product2.png",
        "stock": 150,
        "category": "Jardinería",
        "companyDocument": "04"
    },
    {
        "name": "Herramientas de Jardinería GreenThumb",
        "description": "Set de herramientas de jardinería duraderas y ergonómicas, incluye palas, rastrillos y tijeras de podar para facilitar el trabajo en el jardín.",
        "price": "29.99",
        "image": "https://example.com/greenthumb_product3.png",
        "stock": 100,
        "category": "Jardinería",
        "companyDocument": "04"
    },
    {
        "name": "Macetas de Barro GreenThumb",
        "description": "Macetas de barro artesanales ideales para plantas de interior y exterior, proporcionan un ambiente saludable para el crecimiento de las plantas.",
        "price": "8.99",
        "image": "https://example.com/greenthumb_product4.png",
        "stock": 120,
        "category": "Jardinería",
        "companyDocument": "04"
    },
    {
        "name": "Invernadero Portátil GreenThumb",
        "description": "Invernadero plegable y fácil de montar, ideal para proteger las plantas del frío y proporcionar un ambiente óptimo para el crecimiento durante todo el año.",
        "price": "49.99",
        "image": "https://example.com/greenthumb_product5.png",
        "stock": 80,
        "category": "Jardinería",
        "companyDocument": "04"
    },
    {
        "name": "Taza de Cerámica Hecha a Mano",
        "description": "Taza de cerámica hecha a mano con un diseño único y un esmalte brillante, ideal para disfrutar de tu bebida favorita con estilo.",
        "price": "12.99",
        "image": "https://example.com/artisancrafts_product1.png",
        "stock": 150,
        "category": "Cerámica",
        "companyDocument": "05"
    },
    {
        "name": "Collar de Piedras Naturales",
        "description": "Collar artesanal hecho a mano con piedras naturales seleccionadas, cada pieza es única y resalta la belleza de la naturaleza.",
        "price": "24.99",
        "image": "https://example.com/artisancrafts_product2.png",
        "stock": 100,
        "category": "Joyería",
        "companyDocument": "05"
    },
    {
        "name": "Cuadro de Pintura al Óleo",
        "description": "Cuadro de pintura al óleo sobre lienzo, hecho a mano por artistas talentosos, cada obra es una expresión única de creatividad y belleza.",
        "price": "89.99",
        "image": "https://example.com/artisancrafts_product3.png",
        "stock": 30,
        "category": "Arte",
        "companyDocument": "05"
    },
    {
        "name": "Bolso de Cuero Artesanal",
        "description": "Bolso de cuero genuino hecho a mano con acabados detallados y duraderos, perfecto para añadir un toque de estilo artesanal a cualquier conjunto.",
        "price": "49.99",
        "image": "https://example.com/artisancrafts_product4.png",
        "stock": 80,
        "category": "Moda",
        "companyDocument": "05"
    },
    {
        "name": "Vela Aromática Artesanal",
        "description": "Vela aromática hecha a mano con cera natural y aceites esenciales, crea un ambiente relajante y acogedor en cualquier espacio.",
        "price": "16.99",
        "image": "https://example.com/artisancrafts_product5.png",
        "stock": 120,
        "category": "Decoración",
        "companyDocument": "05"
    },
    {
        "name": "Taza de Cerámica Hecha a Mano",
        "description": "Taza de cerámica hecha a mano con un diseño único y un esmalte brillante, ideal para disfrutar de tu bebida favorita con estilo.",
        "price": "12.99",
        "image": "https://example.com/artisancrafts_product1.png",
        "stock": 150,
        "category": "Cerámica",
        "companyDocument": "05"
    },
    {
        "name": "Collar de Piedras Naturales",
        "description": "Collar artesanal hecho a mano con piedras naturales seleccionadas, cada pieza es única y resalta la belleza de la naturaleza.",
        "price": "24.99",
        "image": "https://example.com/artisancrafts_product2.png",
        "stock": 100,
        "category": "Joyería",
        "companyDocument": "05"
    },
    {
        "name": "Cuadro de Pintura al Óleo",
        "description": "Cuadro de pintura al óleo sobre lienzo, hecho a mano por artistas talentosos, cada obra es una expresión única de creatividad y belleza.",
        "price": "89.99",
        "image": "https://example.com/artisancrafts_product3.png",
        "stock": 30,
        "category": "Arte",
        "companyDocument": "05"
    },
    {
        "name": "Bolso de Cuero Artesanal",
        "description": "Bolso de cuero genuino hecho a mano con acabados detallados y duraderos, perfecto para añadir un toque de estilo artesanal a cualquier conjunto.",
        "price": "49.99",
        "image": "https://example.com/artisancrafts_product4.png",
        "stock": 80,
        "category": "Moda",
        "companyDocument": "05"
    },
    {
        "name": "Vela Aromática Artesanal",
        "description": "Vela aromática hecha a mano con cera natural y aceites esenciales, crea un ambiente relajante y acogedor en cualquier espacio.",
        "price": "16.99",
        "image": "https://example.com/artisancrafts_product5.png",
        "stock": 120,
        "category": "Decoración",
        "companyDocument": "05"
    },
    {
        "name": "Auriculares Bluetooth TechGear",
        "description": "Auriculares inalámbricos con tecnología Bluetooth 5.0, ofrecen un sonido nítido y graves potentes, perfectos para escuchar música y hacer llamadas.",
        "price": "49.99",
        "image": "https://example.com/techgear_product1.png",
        "stock": 200,
        "category": "Audio",
        "companyDocument": "06"
    },
    {
        "name": "Smartwatch TechGear",
        "description": "Smartwatch con pantalla táctil a color, monitor de frecuencia cardíaca, seguimiento de actividad y notificaciones inteligentes, compatible con iOS y Android.",
        "price": "79.99",
        "image": "https://example.com/techgear_product2.png",
        "stock": 150,
        "category": "Wearables",
        "companyDocument": "06"
    },
    {
        "name": "Batería Externa Portátil TechGear",
        "description": "Batería externa de alta capacidad con múltiples puertos de carga, proporciona energía adicional para smartphones, tabletas y otros dispositivos móviles.",
        "price": "29.99",
        "image": "https://example.com/techgear_product3.png",
        "stock": 180,
        "category": "Accesorios",
        "companyDocument": "06"
    },
    {
        "name": "Teclado Mecánico RGB TechGear",
        "description": "Teclado mecánico con retroiluminación RGB personalizable, interruptores táctiles y construcción duradera, ideal para jugadores y usuarios exigentes.",
        "price": "89.99",
        "image": "https://example.com/techgear_product4.png",
        "stock": 100,
        "category": "Periféricos",
        "companyDocument": "06"
    },
    {
        "name": "Cámara de Seguridad WiFi TechGear",
        "description": "Cámara de seguridad inalámbrica con resolución Full HD, visión nocturna, detección de movimiento y acceso remoto desde dispositivos móviles.",
        "price": "69.99",
        "image": "https://example.com/techgear_product5.png",
        "stock": 120,
        "category": "Electrónica",
        "companyDocument": "06"
    },
    {
        "name": "Vestido de Noche Elegante",
        "description": "Vestido largo de noche con detalles de encaje, corte elegante y tejido suave, perfecto para ocasiones especiales y eventos formales.",
        "price": "99.99",
        "image": "https://example.com/fashionfusion_product1.png",
        "stock": 80,
        "category": "Vestimenta",
        "companyDocument": "07"
    },
    {
        "name": "Bolso de Cuero Clásico",
        "description": "Bolso de cuero genuino con acabado clásico y elegante, espacioso y versátil, ideal para llevar tus pertenencias con estilo en cualquier ocasión.",
        "price": "79.99",
        "image": "https://example.com/fashionfusion_product2.png",
        "stock": 120,
        "category": "Accesorios",
        "companyDocument": "07"
    },
    {
        "name": "Zapatos de Tacón Alto",
        "description": "Zapatos de tacón alto con diseño moderno y detalles de pedrería, cómodos y elegantes, ideales para completar tu look de noche.",
        "price": "59.99",
        "image": "https://example.com/fashionfusion_product3.png",
        "stock": 100,
        "category": "Calzado",
        "companyDocument": "07"
    },
    {
        "name": "Blusa Estampada de Seda",
        "description": "Blusa de seda con estampado floral, corte holgado y tejido ligero, perfecta para crear looks casuales y sofisticados.",
        "price": "39.99",
        "image": "https://example.com/fashionfusion_product4.png",
        "stock": 150,
        "category": "Ropa",
        "companyDocument": "07"
    },
    {
        "name": "Gafas de Sol de Diseñador",
        "description": "Gafas de sol de diseñador con montura de acetato y lentes polarizadas, protección UV y estilo moderno, perfectas para días soleados.",
        "price": "129.99",
        "image": "https://example.com/fashionfusion_product5.png",
        "stock": 90,
        "category": "Accesorios",
        "companyDocument": "07"
    },
    {
        "name": "Juguete mordedor para perros",
        "description": "Juguete resistente para perros hecho de caucho natural, diseñado para promover la salud dental y satisfacer el instinto de masticación.",
        "price": "9.99",
        "image": "https://example.com/petparadise_product1.png",
        "stock": 200,
        "category": "Juguetes",
        "companyDocument": "08"
    },
    {
        "name": "Collar ajustable para gatos",
        "description": "Collar de nylon ajustable para gatos con cierre de seguridad y campana, cómodo y seguro para llevar a tu mascota de paseo.",
        "price": "5.99",
        "image": "https://example.com/petparadise_product2.png",
        "stock": 150,
        "category": "Accesorios",
        "companyDocument": "08"
    },
    {
        "name": "Comedero automático para mascotas",
        "description": "Comedero automático programable para mascotas, dispensa comida en horarios preestablecidos, ideal para mantener a tu mascota alimentada cuando estás fuera de casa.",
        "price": "39.99",
        "image": "https://example.com/petparadise_product3.png",
        "stock": 100,
        "category": "Alimentación",
        "companyDocument": "08"
    },
    {
        "name": "Cama ortopédica para perros",
        "description": "Cama ortopédica para perros con espuma viscoelástica de alta densidad, alivia la presión en las articulaciones y promueve un sueño reparador.",
        "price": "49.99",
        "image": "https://example.com/petparadise_product4.png",
        "stock": 120,
        "category": "Descanso",
        "companyDocument": "08"
    },
    {
        "name": "Transportín para mascotas",
        "description": "Transportín resistente y seguro para mascotas, adecuado para viajes en coche o en avión, proporciona comodidad y seguridad para tu mascota durante el transporte.",
        "price": "59.99",
        "image": "https://example.com/petparadise_product5.png",
        "stock": 80,
        "category": "Accesorios",
        "companyDocument": "08"
    }, {
        "name": "Libro de Ficción Bestseller",
        "description": "Última novela de ficción de un autor reconocido, una historia cautivadora llena de suspense y giros inesperados, perfecta para los amantes de la lectura.",
        "price": "14.99",
        "image": "https://example.com/bookhaven_product1.png",
        "stock": 100,
        "category": "Ficción",
        "companyDocument": "09"
    },
    {
        "name": "Libro de Cocina Saludable",
        "description": "Libro de cocina con recetas saludables y deliciosas, incluye platos nutritivos para desayuno, almuerzo, cena y tentempiés, ideal para mejorar tu alimentación.",
        "price": "19.99",
        "image": "https://example.com/bookhaven_product2.png",
        "stock": 120,
        "category": "Cocina",
        "companyDocument": "09"
    },
    {
        "name": "Libro de Autoayuda y Bienestar",
        "description": "Libro inspirador que ofrece consejos prácticos y herramientas para mejorar tu bienestar físico y emocional, transforma tu vida y alcanza tu máximo potencial.",
        "price": "12.99",
        "image": "https://example.com/bookhaven_product3.png",
        "stock": 150,
        "category": "Autoayuda",
        "companyDocument": "09"
    },
    {
        "name": "Libro de Aventuras para Niños",
        "description": "Libro de aventuras ilustrado para niños, sigue las emocionantes hazañas de un valiente protagonista mientras explora mundos fantásticos y enfrenta desafíos emocionantes.",
        "price": "9.99",
        "image": "https://example.com/bookhaven_product4.png",
        "stock": 180,
        "category": "Infantil",
        "companyDocument": "09"
    },
    {
        "name": "Libro de Historia Universal",
        "description": "Libro completo de historia universal, desde los orígenes de la humanidad hasta la era moderna, una guía fascinante que explora los eventos y personajes más importantes de la historia.",
        "price": "24.99",
        "image": "https://example.com/bookhaven_product5.png",
        "stock": 90,
        "category": "Historia",
        "companyDocument": "09"
    }, {
        "name": "Kit de Inicio para Hacer Cerveza en Casa",
        "description": "Kit completo para hacer cerveza casera, incluye ingredientes de alta calidad y equipos básicos de elaboración, perfecto para principiantes y aficionados.",
        "price": "59.99",
        "image": "https://example.com/brewmaster_product1.png",
        "stock": 100,
        "category": "Kits de Cerveza",
        "companyDocument": "10"
    },
    {
        "name": "Malta de Cebada para Elaboración de Cerveza",
        "description": "Malta de cebada molida de alta calidad para la elaboración de cerveza casera, aporta sabor y cuerpo a tus creaciones cerveceras.",
        "price": "12.99",
        "image": "https://example.com/brewmaster_product2.png",
        "stock": 120,
        "category": "Ingredientes",
        "companyDocument": "10"
    },
    {
        "name": "Lúpulo Aromático para Cerveza",
        "description": "Lúpulo seleccionado con aroma floral y cítrico, ideal para añadir notas de sabor y aroma a tus cervezas caseras, proporciona un toque distintivo a cada lote.",
        "price": "8.99",
        "image": "https://example.com/brewmaster_product3.png",
        "stock": 150,
        "category": "Ingredientes",
        "companyDocument": "10"
    },
    {
        "name": "Levadura Especializada para Cerveza",
        "description": "Levadura de alta calidad seleccionada específicamente para la fermentación de cerveza, asegura una fermentación completa y una excelente calidad de la cerveza final.",
        "price": "6.99",
        "image": "https://example.com/brewmaster_product4.png",
        "stock": 180,
        "category": "Ingredientes",
        "companyDocument": "10"
    },
    {
        "name": "Termómetro para Cerveceros",
        "description": "Termómetro de precisión diseñado especialmente para cerveceros caseros, permite controlar con precisión la temperatura durante el proceso de elaboración de la cerveza.",
        "price": "14.99",
        "image": "https://example.com/brewmaster_product5.png",
        "stock": 90,
        "category": "Equipos",
        "companyDocument": "10"
    }, {
        "name": "Collar de Diamantes Brillantes",
        "description": "Elegante collar con diamantes auténticos y diseño sofisticado, añade un toque de lujo y glamour a cualquier conjunto.",
        "price": "999.99",
        "image": "https://example.com/sparkleglow_product1.png",
        "stock": 50,
        "category": "Joyería",
        "companyDocument": "11"
    },
    {
        "name": "Pendientes de Perlas Naturales",
        "description": "Pendientes con perlas naturales de agua dulce y monturas de oro blanco, clásicos y atemporales, ideales para ocasiones especiales.",
        "price": "499.99",
        "image": "https://example.com/sparkleglow_product2.png",
        "stock": 80,
        "category": "Joyería",
        "companyDocument": "11"
    },
    {
        "name": "Pulsera de Plata Esterlina",
        "description": "Pulsera de plata esterlina con diseño entrelazado y cierre seguro, una pieza versátil que complementa cualquier estilo.",
        "price": "199.99",
        "image": "https://example.com/sparkleglow_product3.png",
        "stock": 100,
        "category": "Joyería",
        "companyDocument": "11"
    },
    {
        "name": "Anillo de Compromiso con Diamante",
        "description": "Anillo de compromiso con diamante central de corte brillante y montura de platino, símbolo de amor eterno y compromiso.",
        "price": "2999.99",
        "image": "https://example.com/sparkleglow_product4.png",
        "stock": 30,
        "category": "Joyería",
        "companyDocument": "11"
    },
    {
        "name": "Reloj de Oro Rosa con Diamantes",
        "description": "Reloj de oro rosa con diamantes incrustados en la esfera y pulsera, elegante y lujoso, una pieza de alta relojería para quienes aprecian el lujo.",
        "price": "4999.99",
        "image": "https://example.com/sparkleglow_product5.png",
        "stock": 20,
        "category": "Relojes",
        "companyDocument": "11"
    }
];
exports.default = products;
