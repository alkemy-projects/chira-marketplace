import { useEffect, useState } from 'react';
import db from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';


export const useFooter = () => {
    const [developers, setDevelopers] = useState<any[]>([])

    useEffect(()=> {
        const data = collection(db, 'developers');
        getDocs(data)
            .then(result => {
                const lista = result.docs.map(developer => {
                    return {
                        id: developer.id,
                        ...developer.data()
                    }
                })
                setDevelopers(lista)
            });
    }, [])

    return { developers }
}