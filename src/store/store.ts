import { create } from "zustand";

export interface Project {
    id: string;
    name: string;
    icon: string;
}

interface SuperchargedStore {
    projects: Project[];
    activeProject: string | null;
    chatMapping: Record<string, string>;
    addProject: (name: string, icon: string) => void;
    setActiveProject: (id: string | null) => void;
}

export const useStore = create <SuperchargedStore>((set) => ({
    projects: [
        { id: "proj_1", name: "Coding", icon: ""},
        { id: "proj_2", name: "Research", icon: ""},
        { id: "proj_3", name: "Writing", icon: ""},
        { id: "proj_4", name: "Health", icon: ""},
        { id: "proj_5", name: "Design", icon: ""},
        { id: "proj_6", name: "Entertainment", icon: ""},
    ],

    activeProject: null,
    chatMapping: {},

    addProject: (name, icon) => set((state) => ({
        projects: [
            ...state.projects, 
            { id: `proj_${Date.now()}`, name, icon }
        ]
    })),
    
    setActiveProject: (id) => set({ activeProject: id }),
}));