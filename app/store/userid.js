import { create } from "zustand";
import { getSession } from "next-auth/react";
import axios from "axios";

const useUserStore = create((set) => ({
  userId: null, // Initial user ID
  email: null, // Initial email
  name: null, // Initial name
  adminId: null, // Store Admin ID
  branchConsulars: [], // Store fetched data

  setUserId: (id) => set({ userId: id }),
  setEmail: (email) => set({ email }),
  setName: (name) => set({ name }),
  setAdminId: (adminId) => set({ adminId }),
  setBranchConsulars: (data) => set({ branchConsulars: data }),

  initializeUser: async () => {
    try {
      const session = await getSession(); // Fetch session data
      if (session && session.user) {
        const { id, email, AdminId, name } = session.user;
        set({
          userId: id,
          email,
          name,
          adminId: AdminId || null, // Store AdminId if available
        });
      }
    } catch (error) {
      console.error("Failed to initialize user:", error);
    }
  },

  fetchBranchConsulars: async () => {
    try {
      const session = await getSession();
      if (!session || !session.user) return;

      const { id, AdminId } = session.user;

      const response = await axios.post("/api/admin/singleuser", {
        id,
        AdminId: AdminId || null, // Send AdminId if available
      });

      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      set({ branchConsulars: response.data });
    } catch (error) {
      console.error("Failed to fetch Branch Consulars:", error);
    }
  },
}));

export default useUserStore;
