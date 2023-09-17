import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import style from "./MovieCreate.module.css"

import { useGlobalState } from '../../shared/provider/GlobalProvider/useGlobalstate';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../shared/hooks/useForm';
import { ADD_MOVIES } from '../../shared/provider/GlobalProvider/types';
const CreateMovie = () => {
  const { dispatch } = useGlobalState();
  const navigate = useNavigate();

  const { form, handleFormChange, handleFormSubmit, isEmptyField } = useForm({
    initialForm: {
      Title: "",
      Year: "",
      Poster: "",
    },
    onSubmit: (data) => {
      dispatch({ type: ADD_MOVIES, payload: data });
      navigate("/favorite");
    },
  });
  console.log(form)
  return (
    <div className={`${style["custom-form"]} w-75 m-5`}>
      <img src={form.Poster ? form.Poster : "https://cdn1.iconfinder.com/data/icons/pretty-office-part-8/256/user_yellow-512.png"} style={{ width: "200px", height: "200px", objectFit: "cover", marginBottom: "12px",color:"black" }} />
      <Form className=' w-100' onSubmit={handleFormSubmit}>
        <Form.Group className="mb-4" >
          <Form.Label className='text-white'>Your Movie Url</Form.Label>
          <Form.Control type="text" placeholder="Enter MovieUrl" className='mb-2' name="Poster" onChange={handleFormChange} />
          <Form.Text className="text-danger">
            MovieUrl is Required
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-4" >
          <Form.Label className='text-white'>Movie Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Movie Title" className='mb-2' name="Title" onChange={handleFormChange} />
          <Form.Text className="text-danger">
            Movie Title is Required
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-4" >
          <Form.Label className='text-white'>Year</Form.Label>
          <Form.Control type="number" placeholder="Movie Year" className='mb-2 w-100' name="Year" onChange={handleFormChange} />
          <Form.Text className="text-danger">
            Movie Year is Required
          </Form.Text>
        </Form.Group>
        <Button variant="danger" type="submit" className='w-100' disabled={isEmptyField}>
          Create Movie
        </Button>
      </Form>
    </div>

  )
}
export default CreateMovie