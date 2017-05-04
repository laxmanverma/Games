#pragma strict

function Start () {
	
}

function Update () {
	transform.position = Vector3(
            -3.5+Mathf.PingPong(Time.time*5, 7.5), 0.5+Mathf.PingPong(Time.time*15, 2), -12+Mathf.PingPong(Time.time*15, 22));
}
