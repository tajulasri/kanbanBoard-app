export interface Issue {
    name: string;
    assign_to: string;
    has_parent: boolean;
    parent: any;
    project: any;
    title: string;
    description: string;
    attachment: any;
    due_date: string;
    created_at: string;
    updated_at: string;
}