import { create } from "zustand";

interface Workspace {
  id: string;
  label: string;
  description: string;
  icon?: React.ElementType;
}

interface WorkspaceStore {
  selectedWorkspace: Workspace | null;
  selectWorkspace: (workspace: Workspace) => void;
}

export const useWorkspaceStore = create<WorkspaceStore>((set) => ({
  selectedWorkspace: null,
  selectWorkspace: (workspace) => set({ selectedWorkspace: workspace }),
}));
