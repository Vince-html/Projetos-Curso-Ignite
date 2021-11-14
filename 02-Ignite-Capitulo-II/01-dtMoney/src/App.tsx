import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import GlobalStyle from './styles/global';
import Modal from 'react-modal'
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionsModal';
import { TransactionsProvider } from './Context/TransactionContext';

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false); 

  function handleOpenNewTransactionModal() {
    setIsNewTransactionOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionOpen(false);
  }


  return (
  <TransactionsProvider>
    <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

    <Dashboard />

    <NewTransactionModal 
    onRequestClose={handleCloseNewTransactionModal} 
    isOpen={isNewTransactionOpen} 
    />

    <GlobalStyle />
  </TransactionsProvider>
  );
}

