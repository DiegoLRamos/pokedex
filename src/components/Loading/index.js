import * as S from './style';
import pokeball from '../../assets/img/pokeball.svg';

export default function Loading(){
  return(
    <S.ContainerLoading>
      <img src={pokeball} />
    </S.ContainerLoading>
  );
}