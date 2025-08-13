import { create } from "zustand";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

const useBranchStore = create((set) => ({
  branches: [],
  loading: false,
  fetchLoading: false,

  // Fetch branches
  fetchBranches: async () => {
    try {
      set({ fetchLoading: true });
      const response = await axios.get("/api/Branch/Getbranch");
      set({ branches: response.data, fetchLoading: false });
    } catch (error) {
      set({ fetchLoading: false });
      toast.error("Error Fetching Branches");
    }
  },

  // Create branch
  createBranch: async (branchName) => {
    try {
      if (!branchName) {
        toast.error("Please Enter Branch Name");
        return;
      }
      set({ loading: true });
      await axios.post("/api/Branch/Createbranch", { Branchname: branchName });
      toast.success("Branch Created Successfully");
      set({ loading: false });
    } catch (error) {
      set({ loading: false });
      toast.error("Error Creating Branch");
    }
  },

  // Delete branch
  deleteBranch: async (branchId) => {
    try {
      await axios.delete("/api/Branch/Deletebranch", {
        data: { id: branchId },
      });
      toast.success("Branch Deleted Successfully");
    } catch (error) {
      toast.error("Error Deleting Branch");
    }
  },
}));

export default useBranchStore;
