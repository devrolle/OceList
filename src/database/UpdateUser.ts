import MutateProjectObjects from '@/helpers/MutateProjectObjects';
import { DatabaseProjectData, IUser, Project } from '@/types/dataObjects';

export default async function UpdateUser(user: IUser) {
    let result: { updated: boolean; errors: string[] } | undefined;

    let projects: DatabaseProjectData[] = [];

    if (user?.projects) {
        projects = await MutateProjectObjects(user?.projects as Project[]);
    }

    const updatedUser: IUser = {
        ...user,
        projects,
    };

    const data = {
        apiKey: 'test123456',
        userId: user?.uid,
        updatedData: updatedUser,
    };

    await fetch('http://localhost:3001/users/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((res) => {
            result = res;
        })
        .catch((err) => console.error(err));

    return { result };
}
