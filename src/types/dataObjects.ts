import { User, UserMetadata } from 'firebase/auth';

export interface Comment {
    owner: IUser;
    body: string;
    comments?: Comment[];
}

export interface DatabaseIssueObject {
    id: number;
    title: string;
    body: string;
    repoId: number;
    repoName: string;
    state: string;
    type: string;
}

export interface DatabaseProjectData extends Project {
    languages?: string[];
    readme?: any;
    contributors?: any[];
    subscribers?: GithubUserObject[];
    stargazers?: GithubUserObject[];
    type: string;
}

interface GithubPermissions {
    admin: boolean;
    maintain: boolean;
    pull: boolean;
    push: boolean;
    triage: boolean;
}

interface GitHubRepositoryLicense {
    key: string;
    name: string;
    node_id: string;
    spdx_id: string;
    url: string;
}

export interface GithubUserObject {
    email: string;
    avatar_url: string;
    events_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    gravatar_id: string;
    html_url: string;
    id: number;
    login: string;
    node_id: string;
    organizations_url: string;
    received_events_url: string;
    repos_url: string;
    site_admin: boolean;
    starred_url: string;
    subscriptions_url: string;
    type: string;
    url: string;
    public_repos: number;
}

export interface Issue {
    author_association?: string;
    body?: string;
    comments?: number;
    comments_url?: string;
    created_at?: string;
    events_url?: string;
    html_url?: string;
    id?: number;
    labels_url?: string;
    locked?: boolean;
    node_id?: string;
    number?: number;
    reactions?: any;
    repository_url?: string;
    state?: string;
    timeline_url?: string;
    title?: string;
    type: string;
    updated_at?: string;
    url?: string;
    user?: GithubUserObject;
    repository?: Project;
}

export interface IUser {
    assignedIssues?: Issue[];
    banner_url?: string | null;
    displayName?: string | null;
    githubId?: number | null;
    githubToken?: string | null;
    html_url?: string | null;
    login?: string | null;
    email?: string | null;
    photoURL?: string | null;
    projects?: Project[] | DatabaseProjectData[] | null;
    public_repos?: number | null;
    followers?: IUser[];
    follower_count?: number;
    following?: IUser[];
    following_count?: number;
    favorite_projects?: Project[] | DatabaseProjectData[] | null;
    favorite_projects_count?: number;
    posts?: Post[];
}

export interface Post {
    owner: IUser;
    body: string;
    projectId?: string;
    comments?: Comment[];
    type: string;
}

export interface Project {
    allow_forking?: boolean | undefined;
    archive_url?: string;
    archived?: boolean;
    assignees_url?: string;
    blobs_url?: string;
    branches_url?: string;
    clone_url?: string;
    collaborators_url?: string;
    comments_url?: string;
    commits_url?: string;
    compare_url?: string;
    contents_url?: string;
    contributors_url?: string;
    created_at?: string;
    default_branch?: string;
    deployments_url?: string;
    disabled?: boolean;
    downloads_url?: string;
    events_url?: string;
    fork?: boolean;
    forks?: number;
    forks_count?: number;
    forks_url?: string;
    full_name?: string;
    git_commits_url?: string;
    git_refs_url?: string;
    git_tags_url?: string;
    git_url?: string;
    has_discussions?: boolean;
    has_downloads?: boolean;
    has_issues?: boolean;
    has_pages?: boolean;
    has_projects?: boolean;
    has_wiki?: boolean;
    homepage?: string;
    hooks_url?: string;
    html_url?: string;
    id?: number;
    is_template?: boolean;
    issue_comment_url?: string;
    issue_events_url?: string;
    issues?: Issue[];
    issues_url?: string;
    keys_url?: string;
    labels_url?: string;
    language?: string;
    languages_url?: string;
    license?: GitHubRepositoryLicense;
    merges_url?: string;
    milestones_url?: string;
    name?: string;
    node_id?: string;
    notifications_url?: string;
    open_issues?: number;
    open_issues_count?: number;
    owner?: GithubUserObject;
    permissions?: GithubPermissions;
    private?: boolean;
    pulls_url?: string;
    pushed_at?: string;
    releases_url?: string;
    size?: number;
    ssh_url?: string;
    stargazers_count?: number;
    stargazers_url?: string;
    statuses_url?: string;
    subscribers_url?: string;
    subscription_url?: string;
    svn_url?: string;
    tags_url?: string;
    teams_url?: string;
    trees_url?: string;
    updated_at?: string;
    url?: string;
    visibility?: string;
    watchers?: number;
    watchers_count?: number;
    web_commit_signoff_required?: boolean;
}

interface ProviderData {
    uid?: string;
    providerId?: string | null;
    email?: string | null;
    photoURL?: string | null;
}
