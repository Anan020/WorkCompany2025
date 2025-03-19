import {create} from 'zustand';
import  moment from 'moment';
import { persist } from 'zustand/middleware';
const date = moment().format('L')
const NuchinStore = (set)=>({
    formData:[],
    addForm: (newValue) => set((state) => {
        const newId = state.formData.length; // ใช้ length เป็น ID (เริ่มจาก 0)
        return {
            formData: [...state.formData, { ...newValue, id: newId }]
        };
    }),
    updateForm:(id ,updateData)=>set((state)=>({
        formData:state.formData.map((formData)=> 
        formData.id === id ? {...formData, ...updateData} : formData
        )
    })),
    delForm:(id) =>
        set((state) => {
            const filtered = state.formData.filter((item) => item.id !== id);
            return { formData: filtered };
        }),
});


const usePersist = {
    name: 'nuchin-store',
    getStorage: () => localStorage,
}
const useStore = create(persist(NuchinStore,usePersist));
export default useStore;