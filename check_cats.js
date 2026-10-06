import db from './config/db.js';

const check = async () => {
    try {
        const [cats] = await db.query('SELECT * FROM categories');
        console.log('CATEGORIES:', JSON.stringify(cats, null, 2));

        const [prods] = await db.query('SELECT title, category_id FROM products LIMIT 5');
        console.log('PRODUCTS SAMPLE:', JSON.stringify(prods, null, 2));
        process.exit();
    } catch (e) { console.error(e); process.exit(1); }
};
check();
