import 'package:flutter/material.dart';

class Editor extends StatelessWidget {
  final TextEditingController? controlador;
  final String? rotulo;
  final String? dica;
  final IconData? icone;

  const Editor({Key? key,
    this.controlador,
    this.rotulo,
    this.dica,
    this.icone,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: TextField(
        controller: controlador,
        decoration: InputDecoration(
          icon: icone != null ? Icon(icone) : null,
          labelStyle: const TextStyle(
            fontSize: 24.0,
          ),
          labelText: rotulo,
          hintStyle: const TextStyle(
            fontSize: 24.0,
          ),
          hintText: dica,
        ),
        keyboardType: TextInputType.number,
      ),
    );
  }
}
