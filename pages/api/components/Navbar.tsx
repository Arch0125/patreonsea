import { Box, Button, ButtonGroup, Flex, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import * as React from 'react';
import { NotConnectedModal } from './NotConnectedModal';
import { useWeb3 } from './context/Web3.context';
import { ConnectedModal } from './ConnectedModal';
import { useMetamask } from './context/metamask.context';
import { Select } from '@chakra-ui/react';
import { CHAIN_DICT } from './context/constant';
import { NetworkList } from './NetworkList';

export const Navbar =() =>{

    const web3Provider = useWeb3();
    const {
        isWalletConnected,
        walletAddress,
        connectMetamask,
        connectWalletconnect,
        chain,
        changeChain,
        balance,
        signMessage,
        currentWallet,
      } = useMetamask()

    return(
        < >
            <Flex justifyContent={"space-between"} padding={"20px"} borderBottomColor={"gray.200"} boxShadow={"xl"} borderBottomWidth={"2px"} flexDirection={"row"} width={"100%"} bgColor={"white"} height={"fit-content"} >

                    <Button variant={"ghost"} colorScheme={"purple"} >VibeSea</Button>
                    

                    <ButtonGroup variant={"solid"}   >
                        <Button bgColor={"gray.100"} >Home</Button>
                        <Button bgColor={"gray.100"}>Profile</Button>
                        <Button bgColor={"gray.100"}>Explore</Button>
                        <Button bgColor={"gray.100"}>More</Button>
                    </ButtonGroup>

                    {/* <InputGroup ml={"100px"} width={"300px"}>
                        <InputLeftAddon children="Search" />
                        <Input bgColor={"white"} />
                    </InputGroup> */}
                {isWalletConnected && walletAddress && chain && currentWallet ?(<><ConnectedModal/></>):<NotConnectedModal/>}

            </Flex>
        </>
    )
}

