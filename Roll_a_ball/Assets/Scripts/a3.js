﻿#pragma strict

function Start () {
	
}

function Update () {
	transform.position = Vector3(
            -3.5+Mathf.PingPong(Time.time*10, 7.5), transform.position.y, transform.position.z);
}
