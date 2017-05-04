#pragma strict

function Start () {
	
}

var flag=0;

function OnCollisionEnter (col : Collision)
{
    if(col.gameObject.name == "a1" || col.gameObject.name == "a2" ||col.gameObject.name == "a3" ||col.gameObject.name == "a4" ||col.gameObject.name == "a5" ||col.gameObject.name == "a5R" ||col.gameObject.name == "a6" ||col.gameObject.name == "a7" ||col.gameObject.name == "a8" ||col.gameObject.name == "a9" ||col.gameObject.name == "a10" ||col.gameObject.name == "a11" ||col.gameObject.name == "a12" ||col.gameObject.name == "a13" ||col.gameObject.name == "a14" ||col.gameObject.name == "Obstackle" ||col.gameObject.name == "Obstackle (1)" ||col.gameObject.name == "Obstackle (2)" ||col.gameObject.name == "Obstackle (3)" ||col.gameObject.name == "Obstackle (4)" ||col.gameObject.name == "Cube" ||col.gameObject.name == "Cube (1)" ||col.gameObject.name == "Cube (2)" ||col.gameObject.name == "Cube (3)" ||col.gameObject.name == "Cube (4)")
    {
        //Destroy(col.gameObject);
		flag=1;
    }
}

function Update () {
	if(flag==1)
	{
		//print("Game Over");
		transform.position = Vector3(transform.position.x, 0.5, -24);
		flag=0;
	}
}
