import { Router } from 'express';
import { CreateUserService } from '../services/CreateUserService';
import { UserRepository } from '../repositories/UserRepository';
import { UpdateUserService } from '../services/UpadateUserService';
import { ListOneUserService } from '../services/ListOneUserService';
import { DeleteOneUserService } from '../services/DeleteOneUserService';

const userRoutes = Router();



userRoutes.get('/users', (request, response) => {
  const userRepository = new UserRepository();
  const users = userRepository.listAll();
  return response.json(users);
}); 

userRoutes.post('/users', (request, response) => { 
  const { email, password } = request.body

  const createUser = new CreateUserService();
 const user =  createUser.execute({email, password});

 return response.json(user);

});

userRoutes.put('/users/:id', (request, response) => {
  const { id } = request.params;
  const { email, password  } = request.body;
  const userService = new UpdateUserService()
  const userUpdated = userService.execute({ email, id, password});
  return response.json(userUpdated)
});

//lit one user
userRoutes.get('/users/:id', (request, response) => {
  const { id } = request.params;
  const deliteOneUser = new ListOneUserService();
  const user = deliteOneUser.execute(id);
  return response.json(user);
});

userRoutes.delete('/users', (request, response) => {
  const userRepository = new UserRepository();
  userRepository.delliteAll();
  return response.json({deleteAll: true});
});

userRoutes.delete('/users/:id', (request, response) => {
  const { id } = request.params;
  const deliteUser = new DeleteOneUserService();
  deliteUser.execute(id);
})



export { userRoutes }