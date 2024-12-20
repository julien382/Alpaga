import './Race.scss'
import alpagaMain from "../../assets/alpagaMountain_cut.png";
import alpagaSuri from "../../assets/suri_reverse_cut.png";
import huacaya from "../../assets/huacaya.png";
import AccueilType from '../../components/AccueilType/AccueilType';

const Race = () => {


    return (
        <div className='race'>
            <AccueilType image={alpagaMain} title="Race" texte={
                <span>On peut distinguer deux grandes catégories :<span className="highlight"> les Huacayas et les Suris.</span>
                </span>}> 
            </AccueilType>
            <div className='part2_race'>
                <div className='part2_race_huacayas'>
                    <div className='part2_race_paragraphe1'>
                        <p><span className='variationParagrapheRace'>Les Huacayas </span> ont une <strong>laine dense, douce et bouclée</strong>, qui leur donne un aspect moelleux et rond. Leur laine est très prisée pour <strong>les vêtements et les couvertures</strong> car elle est <strong>chaude et douillette</strong>. Les Huacayas sont également connus pour leur conformation compacte et leur apparence robuste, ce qui les rend facilement reconnaissables. Ils ont une taille moyenne, pesant entre 55 et 79 kg pour les mâles et entre 48 et 64 kg pour les femelles.</p>
                    </div>
                    <div className='part2_race_imageContainer'>
                        <img className='part2_race_image' src={huacaya} alt="alpagaMarron" />
                    </div>

                </div>

                <div className='part2_race_suris'>
                    <div className='part2_race_imageContainer'>
                        <img className='part2_race_image' src={alpagaSuri} alt="alpagaMarron" />
                    </div>
                    <div className='part2_race_paragraphe2'>
                        <p><span className="highlight">Les Suris </span> ont une <strong>laine soyeuse, droite et brillante</strong>, qui leur donne une apparence élégante et noble. Leurs poils sont plus longs que ceux des Huacayas et leur laine est souvent utilisée pour la production de <strong>vêtements haut de gamme</strong>. Les Suris ont une conformation élégante et élancée, avec un cou long et mince. Ils sont plus grands que les Huacayas, pesant entre 68 et 84 kg pour les mâles et entre 50 et 64 kg pour les femelles.</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Race