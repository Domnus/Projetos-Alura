import 'package:bytebank_introducao/models/transferencia.dart';
import 'package:bytebank_introducao/screens/transferencia/formulario.dart';
import 'package:flutter/material.dart';

const _tituloAppBar = "TransferĂȘncias";

class ListaTransferencias extends StatefulWidget {
  final List<Transferencia?> _transferencias = [];

  ListaTransferencias({Key? key}) : super(key: key);

  @override
  State<StatefulWidget> createState() {
    return ListaTransferenciasState();
  }
}

class ListaTransferenciasState extends State<ListaTransferencias> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(_tituloAppBar),
      ),
      body: ListView.builder(
        itemCount: widget._transferencias.length,
        itemBuilder: (
          context,
          indice,
        ) {
          final transferencia = widget._transferencias[indice];
          return ItemTransferencia(transferencia!);
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) {
                return FormularioTransferencia();
              },
            ),
          ).then(
            (transferenciaRecebida) => _atualiza(transferenciaRecebida!),
          );
        },
        child: const Icon(Icons.add),
      ),
    );
  }

  void _atualiza(Transferencia transferenciaRecebida) {
    setState(() {
      widget._transferencias.add(transferenciaRecebida);
    });
  }
}

class ItemTransferencia extends StatelessWidget {
  final Transferencia _transferencia;

  const ItemTransferencia(this._transferencia, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        leading: const Icon(Icons.monetization_on),
        title: Text(_transferencia.valor.toString()),
        subtitle: Text(_transferencia.numeroConta.toString()),
      ),
    );
  }
}
