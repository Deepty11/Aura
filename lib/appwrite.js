import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';

export const config = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.rrd.aura",
    projectId: "67bd8ca7001256f511df",
    databaseId: "67bd8fde00237e2f0439",
    userCollectionId: "67bd90030004630145e7",
    videoCollectionId: "67bd91970031db7f3c76",
    storageId: "67be94aa002d703b8c2e"
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.

const account = new Account(client);
const avaters = new Avatars(client)
const databases = new Databases(client)

export const createUser = async (email, username, password) => {
    const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        username)

    if (!newAccount) throw new Error

    const avaterUrl = avaters.getInitials(username)

    await signIn(email, password)

    const newUser = databases.createDocument(
        config.databaseId,
        config.userCollectionId,
        ID.unique(),
        {
            accountId: newAccount.$id,
            email,
            username,
            avater: avaterUrl
        })
    return newUser
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
            throw new Error(error)
        });
}

export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password)
        return session
    } catch (error) {
        throw new Error(error)
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get()
        if (!currentAccount) throw new Error

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)])

        if (!currentUser) throw new Error

        return currentUser.documents[0]
    } catch (error) {
        console.log(error)
    }
}

export const deleteCurrentSession = async () => {
    await account.deleteSession('current')
}
