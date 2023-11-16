interface Activity {
  id: string;
  title: string;
  description: string;
  column: 'todo' | 'inProgress' | 'done';
}

interface StatusColumn {
  name: string;
  items: {
    id: string;
    title: string;
    description: string;
  }[];
}

interface Status {
  todo: StatusColumn;
  inProgress: StatusColumn;
  done: StatusColumn;
}

export function parseActivity(activity: Activity[] | any): Status {

  const status: Status = {
    todo: {
      name: "Tareas asignadas",
      items: []
    },
    inProgress: {
      name: "Tareas en progreso",
      items: []
    },
    done: {
      name: "Tareas completadas",
      items: []
    }
  };

  activity.forEach((activity: { id: string; title: string; description: string; column: string; }) => {

    const item = {
      id: activity.id,
      title: activity.title,
      description: activity.description
    };

    if(activity.column === 'todo') {
      status.todo.items.push(item);
    }

    if(activity.column === 'inProgress') {
      status.inProgress.items.push(item);
    }

    if(activity.column === 'done') {
      status.done.items.push(item);
    }

  });

  return status;

}