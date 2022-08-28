import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";

export default function Projects() {

  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />
  if (error) return <p>Something Went Wrong</p>



  return (
  <>
    {data.projects.length > 0 ? (
      <div className="row">to be continued</div>
    ) : (<p>No Projects</p>)}
  </>
  )
}
