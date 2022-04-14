import { generatePath } from 'react-router-dom';
import { AppRoutes } from '../const';

export function pathToFilm(id: string | number) {
  return generatePath(AppRoutes.Film, { id: id.toString()});
}

export function pathToAddReview(id: string | number) {
  return generatePath(AppRoutes.AddReview, { id: id.toString()});
}

export function pathToAddPlayer(id: string | number) {
  return generatePath(AppRoutes.Player, { id: id.toString()});
}
