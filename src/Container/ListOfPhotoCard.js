import withPhotos from "../Hoc/withPhotos";
import { ListOfPhotoCardComponent } from "./../Components/ListOfPhotoCard";

//El  container es una capa intermedia que realiza el fetching de datos para los componente presentacionales.

export const ListOfPhotoCard = withPhotos(ListOfPhotoCardComponent);
