import { useRouter } from "next/router"

const pageNo = () => {
    const router=useRouter();
    const page=router.query.pageNo;
  return (
    <div>my {page}</div>
  )
}

export default pageNo