import { User } from 'firebase/auth';

export interface IGithubUser {
    html_url: string | null;
    id: number | null;
    login: string | null;
    public_repos: number | null;
    token: string | undefined;
    projects: any | null;
}

export interface IAuthContext {
    currentUser: User | null;
    githubData: IGithubUser | null;
    updateUserEmail: (email: string) => void;
    updateUserPassword: (password: string) => void;
    logout: () => void;
    setGithubData: (data: IGithubUser) => void;
}
