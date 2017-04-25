# Numeric-TextBox-Validation
Validation for html input elements

```
<input id="numericIdBox" />
<input class="numericClassBox" >

<script src="js/WasaNumeric.js"></script>
<script>
  Numeric(document.getElementById('numericIdBox'),4,2);
  Numeric(document.getElementsByClassName('numericClassBox'),10,2);
</script>

```
You can init simply call Numeric(element, digit, decimal)

