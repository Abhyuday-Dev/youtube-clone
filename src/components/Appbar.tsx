import Searchbar from "./Searchbar"


type Props = {}

const Appbar = (props: Props) => {
  return (
    <div className="flex justify-between pt-1 p-3">
        <div className="text-md pl-2 inline-flex items-center pb-2">Youtube</div>
        <div><Searchbar /></div>
        <div>SignIn</div>
    </div>
  )
}

export default Appbar