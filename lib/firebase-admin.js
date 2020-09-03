import admin from 'firebase-admin';

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            project_id:
                process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
            private_key:
                '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDOddKGgsKYJoxZ\nTcn++CdsYnhgLgFL2zHZ0wsQP5YP2F7cDjhTRmZ85TCNDwSej6W28ckhazcJu+sf\nwVyggFPIQkN212qPSgRMDPfcb+cbiEhbDLlmZYyH4pyJ8cOin9wmVl22En1LvHKS\nH4/u7FtNdNcN/EtQ31+SuQgH+/dIA7QkUURB05idQbPiutRrSLsVXaJ9Nwl/JHl+\ng007SFiY7Fy2huYPICOHcq3MEdiGJ0LAsxwR8sZv/kKAgra8TvUUpWj9D0I7Cdmq\nwjY5IN6OgNqvHf7Eux6grREWBqKUEx5X6mWaHcTlfIZjl/iYLbfDEeg5V1NLNXJl\nmLSJBaehAgMBAAECggEAFo8E1fdd/X5MxzSQNdX13MpfnnFjE9+bRqfgJWzaioMD\no7tsB8ar9nPxG6CV9SCl+eODrK1IghLwjHOLburGp3LSE0n+AIe/s3Lr9uqaj8Vo\nKTFZOqktiJVysZc4iew6A6MGh0Pllou8iwnRfMjXlb2GrVEGsQtPJ+V5eAHd0ZY0\n6kR7128VFPZmjc0veqqDSlsRA7M9jiBYIVb+Wm9K3yhvz0EmLrtG6KCANqTGFygW\ntWt/qclYrfe08y3uO6OAiT0KPbsrpIxr2aTm3KOt1o8uUD2bmPOODBBz/9KXDKsK\nksq0qlshQwMh5I4X8BpO3W/sOCequ2fuKY8ww5KObwKBgQD60G12P58++oLWok5I\nkWeu1prrz3dcUBtVQKk6JwQlptMh70QJS0BqAE0Ze/67or/x5jo/Ri104x0nk865\n4PTDHjJJZplLJACVE3yHIG71t9OxwA7yMrE45H0UHG1o/3h9WvlEWwuX6rSDzNZX\nW5MVZZ26yDuGN8dpddQRGJgXDwKBgQDSuqCMjyhchJjU5A4k7pvChv+ndqegHzIy\nf9FyJyk6AIxkvfe30l21caV5jgAIJlncWw010LW7lekG2V3YXxg99cwqX+K1mZrd\nEYKq1zqvGYc9WAwqQ8O1TrP2jdChT9dv3hXrDZaekHViHkFjhnFhPlpZNYFlEIW1\n/a4dxDDWTwKBgQCRco8X1LtPdUyslUDael/rFw6OEyi/wsCnBrFcRMX147Fqa2tE\nDHyVPAl57tsBCtdOu1kp2lOABjig++kVB+xIvlkhEbtxxLYFvWAoqFlQa0L7QEoq\nj9UQDgiuwfF8wzGnWDtXNYkalwQJrp7Z2AQKk3wNlhJWukAM20SYiW+hZwKBgCNQ\noW1M5H+0vQQYgAJSdooAI8IF0Yu1Dq2F3CzcQT12MBEGAQiuWYP52rhnQrwa6T5T\niAA3zOz174p1TRPgw+hGVAPZ891pM5nOwG4vCaekiJSQN+GxX4/385LjK06NWdZm\nipfMvCwwm2tpFJ5APqoEUBHZNKkiPrZEIDTe1yxjAoGAK7ADovGqVia1LX0zcHw/\nvbWKln94Vir8VUs5kKDqQqYDDwGkWBNGqHS5RK/p7UrTxgC/EJP7yPA+ZpumkAkh\nVqcYOOdoTWrCklZ+6bTydshAFzg+NZGwFU6aOyatyv61OnSNa18akO3vdq73OSth\nah5ZC/vVcHLFQkDhVwc0AoU=\n-----END PRIVATE KEY-----\n',
            client_email:
                process.env
                    .NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
        }),
        databaseURL:
            'https://feedbackdemo-fba32.firebaseio.com',
    });
}

export default admin.firestore();
