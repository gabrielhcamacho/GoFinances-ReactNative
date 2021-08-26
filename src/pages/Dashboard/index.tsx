import React from 'react';
import { View, Text, StyleSheet} from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { HighlightCard } from '../../components/HightlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList
}from './styles'

export interface DataListProps extends TransactionCardProps{
    id: string;
}


export function Dashboard(){

    const data: DataListProps[] = [{
        id: '1',
        type: 'positive',
        title: 'Desenvolvimento de site',
        amount:'R$ 17.630,00',
        category:{
            name: 'vendas', 
            icon: 'dollar-sign'
        },
        date:"14/07/2021",
    },
    {   
        id: '2',
        type: 'negative', 
        title: 'Hamburgueria Palhano',
        amount:'R$ 59,00',
        category:{
            name: 'Alimentação', 
            icon: 'coffee'
        },
        date:"14/07/2021",
    },
    {
        id: '3',
        type: 'negative',
        title: 'Aluguel Apartamento',
        amount:'R$ 1.200,00',
        category:{
            name: 'Casa', 
            icon: 'shopping-bag'
        },
        date:"14/07/2021",
    }
];
    return(
        <Container>
            <Header>
                
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{uri: 'https://avatars.githubusercontent.com/u/62415661?v=4'}}/>
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Gabriel</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power"/>
                </UserWrapper>

            </Header>
        
            <HighlightCards>
                <HighlightCard 
                title="Entrada" 
                amount="R$ 17.630,00" 
                lastTransaction="Última entrada dia 13 de abril"
                type= 'up'
                />

                <HighlightCard 
                title="Saida" 
                amount="R$ 17.630,00" 
                lastTransaction="Última entrada dia 13 de abril"
                type= 'down'
                />

                <HighlightCard 
                title="Total" 
                amount="R$ 17.630,00" 
                lastTransaction="Última entrada dia 13 de abril"
                type='total'
                />
            </HighlightCards>


            <Transactions>
                <Title>Listagem</Title>

                < TransactionList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item}/>}
                />
                    
            </Transactions>

        </Container>
    )
}
