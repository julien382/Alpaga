import './Race.scss'
import alpagaMain from "../../assets/alpagaMountain_cut.png";
import alpagaSuri from "../../assets/suri_reverse_cut.png";
import huacaya from "../../assets/huacaya.png";
import AccueilType from '../../components/AccueilType/AccueilType';

const Race = () => {


    return (
        <div className='race'>
            <AccueilType image={alpagaMain} title="Race" texte={
                <span>On peut distinguer deux grandes catégories :<span className="variationParagrapheAccueilType"> les Huacayas et les Suris.</span>
                </span>}> 
            </AccueilType>
            <div className='part2_race'>
                <div className='containerHuacanyas'>
                    <p className='part2_race_Paragraphe1'><span className='variationParagrapheRace'>Les Huacayas </span> ont une laine dense, douce et bouclée, qui leur donne un aspect moelleux et rond. Leur laine est très prisée pour les vêtements et les couvertures car elle est chaude et douillette. Les Huacayas sont également connus pour leur conformation compacte et leur apparence robuste, ce qui les rend facilement reconnaissables. Ils ont une taille moyenne, pesant entre 55 et 79 kg pour les mâles et entre 48 et 64 kg pour les femelles.</p>
                    <img className='alpagaHuacayas' src={huacaya} alt="alpagaHuacayas" />
                </div>
                <div className='containerSuris'>
                    <img className='alpagaSuris' src={alpagaSuri} alt="alpagaSuris" />
                    <p className='part2_race_Paragraphe2'><span className='variationParagrapheRace'>Les Suris </span> ont une laine soyeuse, droite et brillante, qui leur donne une apparence élégante et noble. Leurs poils sont plus longs que ceux des Huacayas et leur laine est souvent utilisée pour la production de vêtements haut de gamme. Les Suris ont une conformation élégante et élancée, avec un cou long et mince. Ils sont plus grands que les Huacayas, pesant entre 68 et 84 kg pour les mâles et entre 50 et 64 kg pour les femelles.</p>
                </div>
            </div>
        </div>
    )
}

export default Race