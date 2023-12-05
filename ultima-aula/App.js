import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCMnC3pEf-kBeYB6_3IDLsYxhtXoXfJ-yY",
  authDomain: "meuprimeirofirestore-c26fc.firebaseapp.com",
  projectId: "meuprimeirofirestore-c26fc",
  storageBucket: "meuprimeirofirestore-c26fc.appspot.com",
  messagingSenderId: "235656581368",
  appId: "1:235656581368:web:c19b434cca098f6ff4eb0d"
};


firebase.initializeApp(firebaseConfig);


import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function App() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const pessoasCollection = firebase.firestore().collection('Pessoas');
      const snapshot = await pessoassCollection.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setNomes(data);
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Nomes:</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.Nome} {item.Sobrenome}</Text>
          </View>
        )}
      />
    </View>
  );
}
