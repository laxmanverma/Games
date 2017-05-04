#pragma strict

function Start () {
	
}

function Update () {
	transform.position = Vector3(
            0.15+Mathf.PingPong(Time.time*3, 3.5), transform.position.y, transform.position.z);
}
