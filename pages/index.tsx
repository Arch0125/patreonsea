import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useWeb3 } from './api/components/context/Web3.context'
import { Navbar } from './api/components/Navbar'
import { ExplorePage } from './ExplorePage'


interface Props{
  walletAddress:string,
  checkIfWalletIsConnected:Function,
}

const Home: NextPage<Props> = (props:Props) => {

  const Web3Provider = useWeb3();

  const addr = Web3Provider.walletAddress;

  const connectWallet = async() =>{
    Web3Provider.checkIfWalletIsConnected();
  }

  return (
    <Flex flexDirection={"column"} bgColor={"white"} height={"100vh"} >
      <Navbar/>
      <ExplorePage/>
    </Flex>
  )
}

export default Home
