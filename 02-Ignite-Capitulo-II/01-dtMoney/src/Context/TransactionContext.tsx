import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';


interface TransactionProps {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createAt: string;
}

interface TransactionContextProps {
  transactions: TransactionProps[],
  createTransaction: (transaction: TransactionInput) => Promise<void>;

}

type TransactionInput = Omit<TransactionProps , 'id' | 'createAt'>;

interface TransactionsProviderProps {
  children: React.ReactNode
}
const TransactionsContext = createContext<TransactionContextProps>({} as TransactionContextProps);



export function TransactionsProvider({children}: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('transactions', {
      ...transactionInput,
      createAt: new Date(),
    })
    const { transaction } = response.data

    setTransactions([
      ...transactions, 
      transaction
    ])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransaction () {
  const context = useContext(TransactionsContext);

  return context;
}