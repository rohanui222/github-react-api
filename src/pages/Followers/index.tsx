import { useUser } from '../../hooks/useUser';

import { Main } from '../../components/Follow/Main';

import { Container, PageContainer } from './styles';

import { CgProfile } from 'react-icons/cg';

export function Followers() {
    const { followers, acessUserFollow } = useUser();

    return (
        <Container>
            <PageContainer>
                
                <Main
                    profileIcon={<CgProfile size={20} />}
                    follow={followers}
                    acessUser={acessUserFollow}
                    page={"followers"}
                />
            </PageContainer>
        
        </Container>
    );
}