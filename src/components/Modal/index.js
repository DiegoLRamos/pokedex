import * as S from './style';

export default function Modal({ datapokemon, closeModal }){
 console.log(datapokemon.sprites.other.dream_world.front_default)

  return(
    <S.ContainerModal>
      <button onClick={closeModal}> X </button>

      <div className='area'>
        <div className='area-info'>
          <img style={{width: 120}} src={datapokemon.sprites.other.dream_world.front_default} alt={datapokemon.name} />
          {/* <img style={{width: '150'}} src={datapokemon.sprites.front_shiny} alt={datapokemon.name} /> */}
            
          <div>
            <img style={{width: 80}} src={datapokemon.sprites.front_default} alt={datapokemon.name} />
            <img style={{width: 80}} src={datapokemon.sprites.back_default} alt={datapokemon.name} />
          </div>
          
          <h2>{datapokemon.name}</h2>
          <h4>Nº {datapokemon.id}</h4>
          {/* <span>height: {datapokemon.height}</span> */}
          {/* <span>weight: {datapokemon.weight}</span> */}
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

      <div className='area-evolution'>
        <p>Evolutions</p>
        
        <div>
          <img src={datapokemon.sprites.front_shiny} alt={datapokemon.name} />
          <img src={datapokemon.sprites.front_shiny} alt={datapokemon.name} />
          <img src={datapokemon.sprites.front_shiny} alt={datapokemon.name} />
        </div>
      </div>


    </S.ContainerModal>
  );
}