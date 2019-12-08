var raycaster = new THREE.Raycaster();

//POUR TROUVER L'OBJECT FACE A LA CAMERA (SI ON TIRAIT DESSUS, ON LES TOUCHERAIT)
//SI ON A UN OBJET, RETOURNE L'OBJET
//SINON, RETOURNE NULL
function trouver_object_en_face_camera(objects) {
	var objects_intersectes = [];
	//ON PREPARE NOTRE RAYCASTER
	var vecteur_direction_camera = new THREE.Vector3();
	//ON LUI DONNE UNE ORIGINE (CELLE DE LA CAMERA)
	raycaster.ray.origin.copy(camera.position);
	//ON LUI DONNE UNE DIRECTION (CELLE DE LA CAMERA)
	camera.getWorldDirection(vecteur_direction_camera);
	raycaster.ray.direction.copy(vecteur_direction_camera);
	//NEAR ET FAR REPRESENTE LA PLUS PETITE ET LA PLUS LONGUE DISTANCE DU RAYCASTER
	raycaster.near = 0;
	raycaster.far = 100000000;
	//ON PARCOURT TOUS NOS OBJECTS (DANS LE TABLEAU "OBJECTS"), ET ON TESTE POUR CHACUN S'IL EST EST INTERSECTE PAR LE RAYCASTER
	for (var i = 0; i < objects.length; i++) {
		var object = objects[i];
		var result_intersection = [];
		object.raycast(raycaster, result_intersection);
		if (result_intersection.length > 0) {
			return object;
		}
	}
	return null;

}
