import admin from "firebase-admin";
import serviceAccount from "@/lib/service-account.json";

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    });
}

export const auth = admin.auth();