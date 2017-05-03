<?php 
	include("conexion.php");

	if(!empty($_POST["keyword"])) {
		$query ="SELECT * FROM productos WHERE nombre like '" . $_POST["keyword"] . "%' ORDER BY nombre LIMIT 0,6";
		$result=$conexion->query($query);
		if(!empty($result)) {
			?>
				<ul id="country-list">
				<?php
					foreach($result as $country) {
					?>
					<li onClick="selectCountry('<?php echo $country["country_name"]; ?>');"><?php echo $country["country_name"]; ?>
								
							</li>
						<?php 
					} ?>
				</ul>
			<?php 
		}
	}

 ?>