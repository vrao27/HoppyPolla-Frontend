import BeerRecipeForm from '../components/RecipeForm';

export default function CreateBrew () {
  return (
    <div className="newrecipe">
        <h2>Create your own brew</h2>
        <BeerRecipeForm />
    </div>
  );
}
