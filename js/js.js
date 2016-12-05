clicdiplom = 0;
function adddiplome()
{
	if (clicdiplom == 0)
	{
		document.getElementById("diplomes").style.visibility = "visible" ;
		document.getElementById("code_html_gauche").style.visibility = "hidden" ; 
		clicdiplom = 1;
		return;
	}
	else (clicdiplom == 1)
	{
		document.getElementById("diplomes").style.visibility = "hidden" ; 
		document.getElementById("code_html_gauche").style.visibility = "visible" ;
		clicdiplom = 0;
		
	}
} 


clicmetier = 0;
function addmetier()
{
	if (clicmetier == 0)
	{
		document.getElementById("metier").style.visibility = "visible" ; 
			document.getElementById("code_html_droite").style.visibility = "hidden" ; 
		clicmetier = 1;
		return;
	}
	else (clicmetier == 1)
	{
		document.getElementById("metier").style.visibility = "hidden" ; 
		document.getElementById("code_html_droite").style.visibility = "visible" ; 
		clicmetier = 0;
		
	}
} 

clicpriv = 0;
function addpriv()
{
	if (clicpriv == 0)
	{
		document.getElementById("infopriv").style.visibility = "visible" ; 
		clicpriv = 1;
		return;
	}
	else (clicpriv == 1)
	{
		document.getElementById("infopriv").style.visibility = "hidden" ; 
		clicpriv = 0;
		
	}
} 

cliccontact = 0;
function contact()
{
	if (cliccontact == 0)
	{
		document.getElementById("contact").style.visibility = "visible" ; 
		cliccontact = 1;
		return;
	}
	else (cliccontact == 1)
	{
		document.getElementById("contact").style.visibility = "hidden" ; 
		cliccontact = 0;
		
	}
} 



cliclangue = 0;
function langue()
{
	if (cliclangue == 0)
	{
		document.getElementById("langue").style.visibility = "visible" ; 
		cliclangue = 1;
		return;
	}
	else (cliclangue == 1)
	{
		document.getElementById("langue").style.visibility = "hidden" ; 
		cliclangue = 0;
		
	}
} 


function reduire_langue() {
	document.getElementById("langue").style.visibility ="hidden" ;
	cliclangue = 0;
}


function reduire_infospriv() {
	document.getElementById("infopriv").style.visibility ="hidden" ;
	clicpriv = 0;
}


function reduire_metier() {
	document.getElementById("metier").style.visibility ="hidden" ;
	document.getElementById("code_html_droite").style.visibility = "visible" ; 
	clicmetier = 0;
}


function reduire_diplomes() {
	document.getElementById("diplomes").style.visibility ="hidden" ;
	document.getElementById("code_html_gauche").style.visibility = "visible" ;
	clicdiplom = 0;
}


function reduire_contact() {
	document.getElementById("contact").style.visibility ="hidden" ;
	cliccontact = 0;
}


