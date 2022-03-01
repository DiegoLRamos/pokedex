import * as S from './style';

import close from '../../assets/img/x-icon.png';

export default function Modal({ datapokemon, closeModal }){
  return(
    <S.ContainerModal>
      <S.AreaModal>
        <h1>skills</h1>

        <div className='area'>

          <button onClick={closeModal}> 
            <img src={close} alt='button close' /> 
          </button>


          <div className='area-info'>
            <img style={{width: 120}} src={datapokemon.sprites.other.dream_world.front_default} alt={datapokemon.name} />
              
            <div>
              <img style={{width: 80}} src={datapokemon.sprites.front_default} alt={datapokemon.name} />
              <img style={{width: 80}} src={datapokemon.sprites.back_default} alt={datapokemon.name} />
            </div>
            
            <h2>{datapokemon.name}</h2>
            <h4>Nº {datapokemon.id}</h4>

          </div>   


          <div className='area-status'>
            <p>Status</p>
            <ul>
              {datapokemon.stats.map((item) => (
                <li key={item.stat.name}>
                  <label>
                    {item.stat.name}
                  <progress title={`${item.base_stat}`} value={item.base_stat} max="100"></progress>
                  </label>
                </li>
              ))}
            </ul>
          </div> 
        </div>

      </S.AreaModal>
    </S.ContainerModal>
  );
}