import ToastMessage from 'components/commons/ToastMessage';
import ReactDOM from 'react-dom/client';
import { v4 as uuid } from 'uuid';

export type Message = {
  id: string;
  message: string;
  type: 'error' | 'success';
};

class Toast {
  private rootElem: HTMLElement;
  private rootInstance?: ReactDOM.Root;
  private messages: Message[];
  private defaultDuration = 2500;

  private closeMessage(idToDelete: string) {
    const indexToDelete = this.messages.findIndex(
      ({ id }) => id === idToDelete,
    );
    this.messages.splice(indexToDelete, 1);
    this.rootInstance?.render(<ToastMessage messages={this.messages} />);
  }

  private autoCloseMessage(duration: number, id: string) {
    setTimeout(
      () => {
        this.closeMessage(id);
      },
      duration,
      this,
    );
  }

  constructor() {
    const element = document.getElementById('toast-root');
    if (element) {
      this.rootElem = element;
      this.rootInstance = ReactDOM.createRoot(this.rootElem);
      this.messages = [];
    } else {
      throw new Error('"toast-root"를 찾지 못했습니다.');
    }
  }

  success(message: string, duration = this.defaultDuration) {
    if (this.rootInstance) {
      const id = uuid();
      this.messages.push({
        id,
        message,
        type: 'success',
      });
      this.rootInstance.render(<ToastMessage messages={this.messages} />);
      this.autoCloseMessage(duration, id);
    }
  }
  error(message: string, duration = this.defaultDuration) {
    if (this.rootInstance) {
      const id = uuid();
      this.messages.push({
        id,
        message,
        type: 'error',
      });
      this.rootInstance.render(<ToastMessage messages={this.messages} />);
      this.autoCloseMessage(duration, id);
    }
  }
}

export default new Toast();
