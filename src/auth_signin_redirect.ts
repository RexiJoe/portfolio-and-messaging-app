import { getAuth, signInWithRedirect } from "firebase/auth";
import { provider } from "./auth_google_provider_create";


export const auth = getAuth()

signInWithRedirect(auth, provider);