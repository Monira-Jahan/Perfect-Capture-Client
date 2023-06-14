import { useQuery } from "@tanstack/react-query";

const useClass = () => {
    

    const {data: Class = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['Class'],
        queryFn: async() => {
            const res = await fetch('https://photography-school-server-monira-jahan.vercel.app/classes');
            return res.json();
        }
    })

    return [Class, loading, refetch]
}

export default useClass;