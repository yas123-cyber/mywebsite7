import db from './config/db.js';

const check = async () => {
    try {
        const [users] = await db.query('SELECT id, name, email FROM users LIMIT 5');
        console.log('USERS:', JSON.stringify(users, null, 2));

        const [orders] = await db.query('SELECT id, user_id, status FROM orders LIMIT 5');
        console.log('ORDERS:', JSON.stringify(orders, null, 2));

        // Check specific order 13 if it exists
        const [order13] = await db.query('SELECT * FROM orders WHERE id = 13');
        console.log('ORDER 13:', order13);

        process.exit();
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};
check();
